module.exports = {
    Query: {
        users: async (_)=> {
            return ['Jorge', 'Hector', 'Mario', 'Erick']
        }
    },
    Mutation: {
        deleteUser: (_, id)=> {
            const nombres = ['Jorge', 'Hector', 'Mario', 'Erick']
            nombres.splice(1, id);
            return "se borro el id : " + 1
        }    
    }
}