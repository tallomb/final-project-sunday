import os

# מחלקה שמרכזת את כל הקונפיגורציות של הפרויקט
class Settings:
    # מסלול ה-API שבו משתמשים
    API_V1_PATH = '/api/v1'

    # מידע כללי על הפרויקט
    PROJECT_NAME: str = "Sun.Day"            # שם הפרויקט
    PROJECT_AUTHOR: str ="Tal Lombrozo"         # שם המחבר
    PROJECT_VERSION: str = "1.0.0"           # גרסת הפרויקט

    # הגדרות למסד הנתונים
    DATABASE_USER: str = os.getenv("DATABASE_USER")          # משתמש מסד הנתונים (נקרא מהסביבה)
    DATABASE_PASSWORD: str = os.getenv("DATABASE_PASSWORD")  # סיסמת מסד הנתונים (נקראת מהסביבה)
    DATABASE_HOST: str = os.getenv("DATABASE_HOST")          # כתובת ה-host של מסד הנתונים (נקראת מהסביבה)
    DATABASE_PORT: str = os.getenv("DATABASE_PORT")          # מספר ה-port של מסד הנתונים (נקרא מהסביבה)
    
    # כתובת חיבור למסד הנתונים, שנבנית באמצעות פרטי החיבור
    DATABASE_URL = "mongodb://{user}:{password}@{host}:{port}".format(
        user=DATABASE_USER, 
        password=DATABASE_PASSWORD, 
        host=DATABASE_HOST, 
        port=DATABASE_PORT
    )

    # הגדרות לאבטחת ה-API
    SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"  # מפתח סודי להצפנת ה-JWT
    ALGORITHM = "HS256"  # אלגוריתם ההצפנה של ה-JWT
    ACCESS_TOKEN_EXPIRE_MINUTES = 30  # זמן פקיעת תוקף של ה-access token ב-JWT (30 דקות)

    # משתמש בדיקות
    TEST_USER_EMAIL = "test@example.com"  # אימייל של משתמש לבדיקה במערכת

# יצירת מופע של הגדרות (settings) שניתן להשתמש בו בכל חלקי הפרויקט
settings = Settings()
