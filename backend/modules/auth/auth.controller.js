const { signupUser , loginUser } = require("./auth.service");

const signup = async (req, res) => {

    try{

        const user = await signupUser(req.body);

        res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            user
        });

    }

    catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });

    }

}

const login = async (req, res) => {

    try{

        const user = await loginUser(req.body);

        res.status(200).json({
            success:true,
            message:"User Login Successfully",
            "data": user
        });

    }

    catch(error){

        res.status(400).json({
            success:false,
            message:error.message
        });

    }

}
module.exports = {
    signup,
    login
}