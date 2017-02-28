/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

const getSessionApi = {
  route: '/session',
  handle: (req, res, next) => {
    const body = {
      "roles": [
        {
          "roleDes": "管理员",
          "roleId": 1,
          "roleName": "admin"
        }
      ],
      "userCreateTime": 1479139200000,
      "userEmail": "123@qq.com",
      "userId": "a927419795b0432680a10a97fab82fb3",
      "userName": "123",
      "userNickName": "123",
      "userPsd": "123"
    };

    writeResponse(body,res);
  }
};

const getStrokeApi = {
  route: '/stroke',
  handle: (req, res, next) => {
    const body = [
      {
        "strokeDes": "蛙泳",
        "strokeId": 1,
        "strokeName": "breaststroke"
      },   {
        "strokeDes": "自由泳",
        "strokeId": 2,
        "strokeName": "breaststroke"
      },   {
        "strokeDes": "蝶泳",
        "strokeId": 3,
        "strokeName": "breaststroke"
      },   {
        "strokeDes": "仰泳",
        "strokeId": 4,
        "strokeName": "breaststroke"
      }
    ];
    writeResponse(body,res);
  }
};


function writeResponse(body, res,contentType) {
  const bodyStr = JSON.stringify(body);
  if(!contentType){
    res.writeHead(200,"成功！",{
      "Content-Type":"application/json; charset=UTF-8"
    });
  }else{
    res.writeHead(200,"成功！",{
      "Content-Type":"text/html; charset=UTF-8"
    });
  }
  res.write(bodyStr);
  res.end();
}

export default [
  getSessionApi,
  getStrokeApi
];


