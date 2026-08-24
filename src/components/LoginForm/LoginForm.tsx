import styles from './LoginForm.module.css';
const LoginForm = () => {
    return (
        <div className={styles.loginform}>
            <form action="#">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;