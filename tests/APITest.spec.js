const { test, expect } = require('@playwright/test');


/**
 * Questi esempi non funzionano per l'ambiente non conforme all'utilizzo nel piano free
 * Però nel contesto lavorativo bisognerebbe assolutamente spegnere l'esecuzione parallela
 * come indicato sotto per evitare errori di sequenza
 * 
 * Run tests in files in parallel
 * fullyParallel: false,
 * 
 */
var userid;

test('API GET User test', async ({request})=>{
  const response = await request.get("https://reqres.in/api/users?page=2")
  console.log(await response.json())
  expect(response.status()).toBe(200)

})

test.only('API Create  User test', async ({request})=>{
  const response = await request.post('https://reqres.in/api/users',
    {
      data: {
        "name":"anatoliyS",
        "job":"tester"
      },
      headers:{
        "Accept":"application/json"
      }
    }
  );
  console.log(await response.json())
  expect(response.status()).toBe(201)
  var res = await response.json()
  userid=res.id
})

test('API Update User test', async ({request})=>{
  const response = await request.put('https://reqres.in/api/users/'+userid,
    {
      data: {
        "name":"sergey",
        "job":"farmer"
      },
      headers:{
        "Accept":"application/json"
      }
    }
  );

})

test('API Delete User test', async ({request})=>{
  const response = await request.put('https://reqres.in/api/users/'+userid)
  expect(request.status).toBe(204)
})