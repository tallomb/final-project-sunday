import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
// קריאת ל API URL שהגדרנו  כדי שהאפליקציה תדע לאן לשלוח בקשות ל API
// והוספת בנתיב פנייה ל USERS API
const API_URL = publicRuntimeConfig.API_URL + "/api/v1/users/";

// שליחת בקשה לשרת לבדיקת נתוני המשתמש שהתחבר
const login = async (email, password) => {
  const response = await fetch(API_URL + "token", {
    method: "POST",
    headers: {
      // הגדרת מבנה סוג המידע שיחזור אלינו - בצורה של URL
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(
      // שליחת הבקשה לשרת עם הנתונים
      `grant_type=password&username=${email}&password=${password}&client_id=sunday-client&client_secret=sunday-secret`
    ),
  });
  // הכנסת התשובה מהשרת
  const data = await response.json();
  // בדיקה האם הבקשה הצליחה והמשתמש קיים
  if (!response.ok) {
    throw new Error(data.detail);
  }

  return data;
};
// שליחת בקשה לשרת ליצירת משתמש חדש
const register = async (email, password, firstname, lastname) => {
  const response = await fetch(API_URL + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      email,
      password,
      firstname,
      lastname,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail);
  }

  return data;
};

const AuthService = {
  login,
  register,
};

export default AuthService;
