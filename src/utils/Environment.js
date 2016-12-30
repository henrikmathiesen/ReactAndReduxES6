class Environment {
    static getIsDebug(){
        return process.env.NODE_ENV !== 'production';
    }
}

export default Environment;
