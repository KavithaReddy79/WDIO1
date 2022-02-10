describe('home',()=>{
    it('teest1',async()=>{
        await browser.url('https://practice.automationbro.com');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
      

    })
})
