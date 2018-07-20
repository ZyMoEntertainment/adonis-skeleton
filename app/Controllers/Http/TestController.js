const Env = use('Env');

class TestController {
    constructor () {

    }

    async welcomeMessage({params, request, response}) {
        try {
            return response.status(200).json("Welcome to Adonis!");
        } catch(e) {
            return response.status(400).json(e);
        }
    }

}
module.exports = TestController;
