import { promises as fs, readdirSync } from 'fs';
import path from 'path';
import { Sequelize, Model } from 'sequelize';
import config from '../../config/config.json' with { type: "json"};

async function loadSequelizeModels() {
  const env = process.env.NODE_ENV || 'development';
  const configEnv = config[env];
  const db = {};

  let sequelize;
  if (configEnv.use_env_variable) {
    sequelize = new Sequelize(process.env[configEnv.use_env_variable], configEnv);
  } else {
    sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, configEnv);
  }

  const srcFolder = path.join(process.cwd(), 'src');
  const allFiles = readdirSync(srcFolder, { recursive: true });
  
  for (const file of allFiles) {
      const filePath = path.join(srcFolder, file);
      const fileStat = await fs.stat(filePath);

      if (fileStat.isFile()) {
        const fileUrl = `file://${filePath.replace(/\\/g, '/')}`;
        const module = await import(fileUrl);
        const isSequelizeModel = module?.default 
          && Object.values(module.default).find(exp => exp?.prototype instanceof Model) 
          && module.default.initModel;
          
        if (isSequelizeModel) {
          const model = module.default.initModel(sequelize);
          db[model.name] = model;
        }
      }
  }

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
  db.sequelize = sequelize;
  return db;
}

export default loadSequelizeModels;