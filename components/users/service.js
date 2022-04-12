const userModel = require('./model');

// tầng gọi database
exports.login = async (email) => {
    // const user = data.filter(i => i.email == email)[0];
    // return user;
    const user = await userModel.findOne({ email: email },
        'id email password');
    return user;
}

exports.register = async(email, password)=>{
    const user = new userModel({email, password});
    return await user.save();
}

 // mảng dữ liệu users
 // lấy từ database
 // var users = [
 //   {id: 1, email: 'thinhblue@gmail.com', password: '123456', name: 'Thịnh Blue'}
 //]










