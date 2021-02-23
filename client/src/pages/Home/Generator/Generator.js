import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { genres, tags } from '../../../utils/constants';
import Button from '../../../components/Button/Button';
import MultiSelect from '../../../components/Select/MultiSelect';

export default function Generator() {
    const [switchValue, setSwitchValue] = useState(false);

    return (
        <section className="container mx-auto max-w-2xl flex flex-col   mt-24 h-screen p-5">
            <h3 className="text-white text-2xl md:text-3xl font-bold py-1 text-center">
                Random Manga Generator
            </h3>
            <div className="bg-red-500  border-b-2 border-red-500 w-11/12 rounded-full"></div>
            <span className="text-gray-500 text-xs px-3 py-2 text-center">
                Fill in the form below to get a personlized random list.
            </span>

            <div className="flex w-full flex-col items-center gap-5">
                <div className="p-5 py-10">
                    <Switch.Group
                        as="div"
                        className="flex items-center  space-x-4">
                        <Switch.Label className="text-gray-400 text-sm">
                            Hide manga on list
                        </Switch.Label>
                        <Switch
                            as="button"
                            checked={switchValue}
                            onChange={setSwitchValue}
                            className={`${
                                switchValue ? 'bg-indigo-500' : 'bg-gray-500'
                            } relative inline-flex flex-shrink-0 h-5 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-10 focus:outline-none focus:shadow-outline`}>
                            {({ checked }) => (
                                <span
                                    className={`${
                                        checked
                                            ? 'translate-x-5'
                                            : 'translate-x-0'
                                    } inline-block w-4 h-4 transition duration-200 ease-in-out transform bg-white rounded-full`}
                                />
                            )}
                        </Switch>
                    </Switch.Group>
                </div>
                <MultiSelect
                    placeholder="Genres (All)"
                    options={genres.map((genre) => {
                        return {
                            value: genre,
                            label: genre,
                        };
                    })}
                />
                <MultiSelect
                    placeholder="Tags (All)"
                    
                    options={tags.map((tagCollection) => {
                        return {
                            label: tagCollection.category,
                            options: tagCollection.tags.map((tag) => {
                                return {
                                    value: tag,
                                    label: tag,
                                };
                            }),
                        };
                    })}
                />

                <Button
                    size="xl"
                    textColor="white"
                    bgColor="bg-orange-700"
                    textShadow="text-shadow-md"
                    hoverBgColor="bg-orange-600">
                    Generate List
                </Button>
            </div>
        </section>
    );
}
