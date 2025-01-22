(() => {
    console.log("🚀 ~ Responsabilidad unica:");
    // * Responsabilidad única
    // ! Priorizar la composición sobre la herencia

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    interface UserProps {
        email: string;
        role: string;
    }

    interface SettingsProps {
        workDirectory: string;
        lastOpenFolder: string;
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

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;
        constructor({ email, role }: UserProps){
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials()  {
            return true;
        }
    }

    class Settings {
        public workDirectory: string;
        public lastOpenFolder: string;
        constructor({ workDirectory, lastOpenFolder }: SettingsProps){
            this.workDirectory = workDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }   
    }

    // ! Priorizar la composición sobre la herencia Se usa una clase que contiene las otras clases
    class UserSettings {
        public person: Person;
        public settings: Settings;
        public user: User;
        constructor({
            name,
            birthDate,
            email,
            gender,
            role,
            workDirectory,
            lastOpenFolder
        }: UserSettingsProps) {
            // * 
            this.person = new Person({ birthDate, gender, name });
            this.user = new User({ email, role });
            this.settings = new Settings({ workDirectory, lastOpenFolder });
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
    console.log("🚀 ~ userSettings:", { userSetting });

    // const newPerson = new Person('Jhon Doe', 'M', new Date('1990-01-01'));
    // console.log("🚀 ~ Person :", newPerson);
})();