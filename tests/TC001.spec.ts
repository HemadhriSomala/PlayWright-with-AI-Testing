//--To provide actual automation test scripts / steps
import {test} from '@playwright/test';
import { general } from '../lib/General';

test('@Smoke-Login and Logout Test', async({page})=>{
//--Test steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.Login();
    await obj.Logout();
    console.log("Test Case is completed");
});
