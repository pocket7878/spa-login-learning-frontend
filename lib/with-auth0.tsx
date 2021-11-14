import { useAuth0 } from '@auth0/auth0-react';
import React, { memo, ReactElement } from 'react';
import { RedirectToLogin } from './login-redirect';

type Props = {
	children: ReactElement;
}

export const WithAuth = memo(function WithAuth({children}: Props) {
	const {isLoading, isAuthenticated, user} = useAuth0();
	const ch = React.cloneElement(children, {user: user});

	return (isLoading ? <div>Authorizing...</div> : isAuthenticated ? ch : <RedirectToLogin/>);
});