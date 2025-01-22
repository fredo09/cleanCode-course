(() => {
    console.log("🚀 ~ Objetos como propiedades:");
    // Objetos como propiedades

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    interface UserSettingsProps {
        workDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    type Gender = 'M' | 'F';
    class Person {
        public birthDate: Date;
        public gender: Gender;
        public name: string;
        constructor({ name, gender, birthDate }: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    class User extends Person {
        public email: string;
        public lastAccess: Date;
        public role: string;
        constructor({ birthDate, email, gender, name, role }: UserProps){
            super({name, gender, birthDate});
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials()  {
            return true;
        }
    }

    class UserSettings extends User {
        public workDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate
        }: UserSettingsProps){
            super( {email, role, name, gender, birthDate});
            this.workDirectory = workDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }   
    }

    const userSetting = new UserSettings({
        workDirectory: 'work',
        lastOpenFolder: 'folder',
        email: 'email',
        role: 'admin',
        name :'Jhon Doe',
        gender: 'M',
        birthDate: new Date('1990-01-01')
    });
    console.log("🚀 ~ userSettings: ", { userSetting });

    // const newPerson = new Person('Jhon Doe', 'M', new Date('1990-01-01'));
    // console.log("🚀 ~ Person :", newPerson);
})();