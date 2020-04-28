import React from 'react';
import {InputField} from '../../shared/formik/FormikComponents';

const DefaultOnlineClassSetting = () => {

    return (
        <div className="px-4 pb-4">
            <fieldset className="border border-2 border-gray-500 shadow-lg rounded ">
                <legend className="ml-4">ONLINE CLASS DEFAULT SETTINGS</legend>
                <div className="ml-4 p-4">

                    <div className="block sm:flex items-center">
                        <label className='text-sm block font-bold  pb-2  sm:w-1/5'>STUDENTS PER
                            CLASS</label>
                        <div className="block sm:flex sm:ml-4 items-center">
                            <InputField
                                label="MIN"
                                id="minStudentPerOnlineClass"
                                name="minStudentPerOnlineClass"
                                type='number'
                                placeholder='MIN'
                            />
                            <InputField
                                label="MAX"
                                id="maxStudentPerOnlineClass"
                                name="maxStudentPerOnlineClass"
                                type='number'
                                placeholder='MIN'
                            />
                        </div>
                    </div>

                    <div className="block sm:flex items-center">
                        <label className='text-sm block font-bold  pb-2  sm:w-1/5'>PRICE PER STUDENT</label>
                        <div className="flex sm:ml-4 items-center">
                            <InputField
                                id="pricePerOnlineStudent"
                                name="pricePerOnlineStudent"
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

export default DefaultOnlineClassSetting;