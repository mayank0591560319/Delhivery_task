import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/img2.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>This privacy policy (“Privacy Policy”) has been drafted, approved and posted by us to inform you how our products collect, use, and otherwise process – on behalf of digital marketers, website owners, leading brands, and other businesses that use our services (“Customer”) – information, including personal data of Customers’ online users and clients (“End Users”).
          This Privacy Policy is meant to help Customers and End Users understand the services we provide through our products and how the services may affect or promote End Users’ and Customers’ rights and interests. 
          Just as our products is to be integrated with Customers’ websites, this Privacy Policy should be read in connection with Customers’ respective privacy policies. Granted this reservation, this Privacy Policy aspires to give you, the reader, a clear picture of the following:  

          *services ee provide;
          *information we process;
          *cookies and JavaScript tags we use;
          *purposes we answer;
          *data subjects’ rights we help exercise; and
          *protective measures we take.
          </p>
          
        </div>
      </div>
    </Layout>
  )
}

export default Policy
