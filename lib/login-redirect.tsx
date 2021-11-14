import { memo, useEffect } from "react";

export const RedirectToLogin = memo(function RedirectoTLogin() {
	useEffect(() => {
		window.location.assign("/")
	}, [])

	return <div>Signing in...</div>
})