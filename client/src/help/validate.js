const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePassword = (pw) => pw.length >= 6 ? true : false

export const validate = ({target}) => {

	let { name, value } = target

	let error = false
	let error_message = ''

	if(name === 'email'){
		if(value === ''){
			error = true
			error_message = 'Email field cannot be empty.'

			return { error, error_message }
		}
		else if(!validateEmail(value)){
			error = true
			error_message = 'Please enter a valid email.'

			return { error, error_message }
		}
		else {
			error = false
			return error
		}
	}

	else if(name === 'password'){
		if(value === ''){
			error = true
			error_message = 'Password field cannot be empty.'

			return { error, error_message }
		} 
		else if(!validatePassword(value)){
			error = true
			error_message = 'Password must be at least 6 characters long.'

			return { error, error_message }
		}
		else {
			error = false
			error_message = ''

			return {
				error, error_message
			}
		}
	}

	else if(name = 'name'){
		if(value === ''){
			error = true
			error_message = 'Name field cannot be empty.'

			return { error, error_message }
		} else {
			error = false
			error_message = ''

			return {
				error, error_message
			}
		}
	}
}