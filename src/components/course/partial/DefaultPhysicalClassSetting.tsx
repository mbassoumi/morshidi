import React from 'react';
import {InputField, SelectField} from '../../shared/formik/FormikComponents';
import {ReactSelectType} from '../../shared/ReactSelect';
import CITIES from './../../../data/cities'
const DefaultPhysicalClassSetting = () => {

    const cities = CITIES

    return (
        <div className="px-4 pb-4">
            <fieldset className="border border-2 border-gray-500 shadow-lg rounded ">
                <legend className="ml-4">PHYSICAL CLASS DEFAULT SETTINGS</legend>
                <div className="ml-4 p-4">

                    <div className="block sm:flex items-center">
                        <label className='text-sm block font-bold  pb-2  sm:w-1/5'>LOCATION</label>
                        <div className="block sm:flex sm:ml-4 items-center sm:w-4/5">

                            <SelectField
                                className="w-full sm:w-1/2 md:w-1/3"
                                label='CITY'
                                id='city'
                                name='city'
                                type={ReactSelectType.SELECT}
                                options={cities}
                                isClearable={true}
                                placeholder='enter course city'
                            />
                            <InputField
                                className="w-full sm:w-1/2 md:w-2/3"
                                label="PHYSICAL ADDRESS"
                                id="physicalAddress"
                                name="physicalAddress"
                                type='text'
                                placeholder='Physical Address'
                            />
                        </div>
                    </div>

                    <div className="block sm:flex items-center">
                        <label className='text-sm block font-bold  pb-2  sm:w-1/5'>STUDENTS PER CLASS</label>
                        <div className="block sm:flex sm:ml-4 items-center">
                            <InputField
                                label="MIN"
                                id="minStudentPerPhysicalClass"
                                name="minStudentPerPhysicalClass"
                                type='number'
                                placeholder='MIN'
                            />
                            <InputField
                                label="MAX"
                                id="maxStudentPerPhysicalClass"
                                name="maxStudentPerPhysicalClass"
                                type='number'
                                placeholder='MIN'
                            />
                        </div>
                    </div>

                    <div className="block sm:flex items-center">
                        <label className='text-sm block font-bold  pb-2  sm:w-1/5'>PRICE PER STUDENT</label>
                        <div className="flex sm:ml-4 items-center">
                            <InputField
                                id="pricePerPhysicalStudent"
                                name="pricePerPhysicalStudent"
                                type='number'
                                placeholder='price per student'
                            />
                            <span>NIS</span>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default DefaultPhysicalClassSetting;