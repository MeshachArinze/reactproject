export interface  FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


interface Todo {
  title: string;
  name: string;
}

export const todo: Readonly<Todo> = {
  title: "Register",
  name: "Account"
};

