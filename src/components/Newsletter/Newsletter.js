import { useState } from 'react'
import styles from './Newsletter.module.scss'

export default function Newsletter(
    subscriberEmail,
    setSubscriberEmail
) {
    return (
        <div className={styles.newsletter}>
        <label>Subscribe to Our Newsletter!</label>
            <input className={styles.subscribe}
            type="text"
            placeholder="Email Here..."
            onChange={e => setSubscriberEmail(e.target.value)} />
        </div>
    )
}

// how do i conceptualize the LITERAL newsletter in the mongo db database? Where do I place the array of email addresses to be stored?



// handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       const formData = {...this.state};
//       delete formData.confirm;
//       delete formData.error;
//       // The promise returned by the signUp service method
//       // will resolve to the user object included in the
//       // payload of the JSON Web Token (JWT)
//       const user = await signUp(formData);
//       // Baby step
//       this.props.setUser(user);
//     } catch {
//       // An error happened on the server
//       this.setState({ error: 'Sign Up Failed - Try Again' });
//     }
//   };
