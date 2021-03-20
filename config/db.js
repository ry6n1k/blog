const MONGO_USERNAME = 'blog-db';
const MONGO_PASSWORD = 'b75EPfKQfG5dPPnw5JjbDa9ggH5cwJdiAcj0FiR4Z2hvgv1j0Hbd9PFlGiGASEKxMN48yP3UXR9xDCyMW6L4Jg==';
const MONGO_HOSTNAME = 'blog-config.mongo.cosmos.azure.com';
const MONGO_PORT = '10255';
const MONGO_DB = 'blog-db';

/*module.exports = {
    uri = 'mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?ssl=true'
}*/

module.exports = {
    uri: 'mongodb://blog-db:b75EPfKQfG5dPPnw5JjbDa9ggH5cwJdiAcj0FiR4Z2hvgv1j0Hbd9PFlGiGASEKxMN48yP3UXR9xDCyMW6L4Jg==@blog-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@blog-db@'
};