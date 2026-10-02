import { test } from '@playwright/test';
import { general } from '../lib/General';

test.describe('Rehression Test Suite', ()=>{
    test('Login and Logout Test', async({page})=>{
        let obj = new general(page);
        await obj.openApplication();
        await obj.Login();
        await obj.Logout();
    });
    test('Add New Employee',async({page}) =>{
    //--Test steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.waitStmt();
    await obj.Login();
    await obj.waitStmt();
    await obj.addNewEmployee();
    await obj.waitStmt();
    await obj.Logout();
    await obj.waitStmt();
});
});