import { Fragment, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

interface GuardedRouteProps {
	redirectTo?: string;
	isPublic?: boolean;
}

const isAuthenticated = false;

function GuardedRoute({ redirectTo = '/login', isPublic = false, children }: PropsWithChildren<GuardedRouteProps>) {
	if (isPublic ? isAuthenticated : !isAuthenticated) {
		return (
			<Fragment>
				<Navigate to={redirectTo} replace />
			</Fragment>
		);
	}

	return children;
}

export default GuardedRoute;
