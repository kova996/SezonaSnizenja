import * as firebase from 'firebase';

export class AuthService {
    token: string;


    registerUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                err => console.log(err)
            );
    }

    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(
                err => console.log(err)
            )
            .then(
                res => {
                    if(firebase.auth().currentUser!=null)
                        firebase.auth().currentUser.getIdToken()
                        .then(
                            (token:string) => this.token = token
                        );
                }
            );
    }
    loginUserAsync(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
            .then(
                (token:string) => this.token = token
            );
        return this.token;
    }

    getTokenAsync(){
        if(firebase.auth().currentUser)
            return firebase.auth().currentUser.getIdToken();
        
    }

    isAuthenticated(){
        return this.token != null;
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
    }
}