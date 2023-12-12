"use client"
function Page(){

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)

    const sms = {
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    const res = await fetch('/api/sms',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sms)
    })

    const data = await res.json();
    //console.log(data);
    alert('Mensaje enviado')

  };
  
  return (
  <div className="flex items-center justify-center h-screen">
    <form className="bg-slate-900 p-10" onSubmit={onSubmit}>

      <h1 className="text-white text-3xl font-bold">Send SMS</h1>

      <label className="text-white block my-4">
        Write your phone number here:
      </label>
      <input name= "phone" type="tel" placeholder="Write your phone number here"
      className="px-3 py-1 rounded-md block" autoComplete="off"/>


      <label className="text-white block my-4">
        Write your message here:
      </label>

      <textarea name="message" placeholder="Write your message here" className="px-3 py-1 rounded-md block">
      </textarea>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md block mt-4">
        Send SMS
      </button>

    </form>
  </div>
  );
}
export default Page;