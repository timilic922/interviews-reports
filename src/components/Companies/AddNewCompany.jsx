import React from 'react'
// companySubmit,newCompanyName,setNewCompanyName,newCompanyEmail,setNewCompanyEmail
function AddNewCompany() {


    const [company, setCompany] = useState({
        name: "",
        email: ""
      })

    const submitCompany = () => {
        fetch("http://localhost:3050/company", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(company)
        }).then((res) => res.json())
          .then((res) => {
            if (res.accessToken) {
              setIsLogedIn(res.accessToken)
              localStorage.setItem('login', JSON.stringify(res.accessToken))
            }
          })
      }
  return (
    <>









        {/* <form action="" className='addNewCompany' onSubmit={companySubmit}>
            <div className='formControl'>

            <label htmlFor="NewCompanyName"> Company Name: </label>
            <input  type="text" 
                id='NewCompanyName' 
                required 
                value={newCompanyName} 
                onChange={(e)=>setNewCompanyName(e.target.value)} />



            <label htmlFor="NewCompanyEmail"> Company Email: </label>
            <input type="text" 
                    id='NewCompanyEmail'
                    required
                    value={newCompanyEmail}
                    onChange={(e)=>setNewCompanyEmail(e.target.value)} />
                </div>
                <button type='submit' >Submit New Company</button>

        </form> */}
      
    </>
  ) 
}

export default AddNewCompany
