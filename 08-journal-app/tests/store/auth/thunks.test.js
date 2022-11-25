import { checkingAuthentication, startGoogleSignIn, startLoginWithEmail, startLogout } from '../../../src/store/auth/thunks';
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from '../../../src/firebase/providers';
import { demoUser } from '../../fixtures/authFixtures';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { clearNotesLogout } from '../../../src/store/journal/journalSlice';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('Debe invocar checkingCredentials()', async () => {
        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
    });

    test('startGoogleSignIn debe llamar checkingCredentials y login', async () => {
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startGoogleSignIn debe llamar checkingCredentials y logout', async () => {
        const loginData = { ok: false, errorMessage: 'Error de google' };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('startLoginWithEmail debe llamar checkingCredentials y login', async () => {
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: 'fdskafljdsal' };

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmail(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(demoUser));
    });


    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout({}));
    });
});