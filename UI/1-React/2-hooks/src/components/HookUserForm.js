import React,{useState} from 'react';

function HookUserForm(props) {

    const [user,setUser]=useState({firstName:'',lastName:''});
    return (
        <div className="col-5">

            <div className="card">
                <div className="card-header">User Form</div>
                <div className="card-body">
                    <form autoComplete="off">
                        <div>
                            <label>First namw</label>
                            <input onChange={e=>{setUser({...user,firstName:e.target.value})}} id="first_name" className="form-control"/>
                        </div>
                        <div>
                            <label>Last name</label>
                            <input id="last_name" onChange={e=>{setUser({...user,lastName:e.target.value})}} className="form-control"/>
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit"  className="btn btn-primary">Save</button>
                        </div>
                        <br/>
                        <pre>
                            {JSON.stringify(user)}
                        </pre>
                    </form>
                </div>
            </div>

            
            
        </div>
    );
}

export default HookUserForm;