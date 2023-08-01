import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us- Potato Leaf Disease Detection Using Deep Learning"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/img1.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
Economy contributes the most for the productivity of the agriculture.
In agricultural field, the disease in plants is more common and the detection of disease in plants has become more feasible due to the above reason.
These days's plant disease detection has acquired enlarging scrutiny in surveilling crops of large and various fields.
Farmers undergo significant hassles in chop and changing from one disease administer principle to a different one.
We can identify or spotting the tomato leaf diseases for detection for surveillance and monitoring experts is the standard approach for detection.
The plants get seriously affected if the proper control hasn't been taken and this represents the quality of the pants the production of the plants will be affected.
 Detection of disease through some mechanized technique and methodology is efficient and constructive because it decreases an outsized toil of surveilling in the large cultivation. 
 In the premature phase we can detect the symptoms of the plant diseases since their first appearance on their leaves of the plants. 
 
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
