import React from "react";
import './ShopByCategory.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FlyingToy from "./FlyingToy/FlyingToy";
import JungleToy from "./JungleToy/JungleToy";
import SeaToy from "./SeaToy/SeaToy";

const ShopByCategory = () => {
  return (
    <div className="mt-20 md:p-20 rounded-3xl">
        <h1 className='text-center text-4xl w-11/12 md:w-1/2 rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto p-4 mb-10'>Sub Category</h1>
      <Tabs className=' text-white rounded-3xl md:p-10'>
        <TabList>
          <Tab>Flying Toy</Tab>
          <Tab>Jungle Toy</Tab>
          <Tab>Sea toy</Tab>
        </TabList>

        <TabPanel>
           <div  className="bg-fly md:p-20 rounded-3xl">
              <FlyingToy></FlyingToy>
             </div>
        </TabPanel>

        <TabPanel>
           <div className="bg-jungle md:p-20 rounded-3xl"> 
              <JungleToy></JungleToy>
            </div>
        </TabPanel>
        
        <TabPanel>
          <div className="bg-sea md:p-20 rounded-3xl">
            <SeaToy></SeaToy>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
