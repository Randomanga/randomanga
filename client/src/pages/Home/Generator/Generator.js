import React, { useState } from 'react';
import { genresList, tagsList } from '../../../utils/constants';
import Button from '../../../components/Button/Button';
import MultiSelect from '../../../components/Select/MultiSelect';

export default function Generator() {
    const [included, setIncluded] = useState([]);
    const [excluded, setExcluded] = useState([]);

    const onGenerate = () => {};

    return (
        <section className="container mx-auto max-w-2xl flex flex-col  items-center mt-24 h-screen  p-2 sm:p-5">
            <h3 className="text-white text-2xl md:text-3xl font-bold py-1 text-center">
                Random Manga Generator
            </h3>
            <div className="bg-red-500  border-b-2 border-red-500 w-11/12 rounded-full"></div>
            <span className="text-gray-500 text-xs px-3 py-2 text-center">
                Fill in the form below to get a personlized random list.
            </span>

            <div className="flex mt-20 w-full md:w-105 flex-col items-center gap-5">
                <MultiSelect
                    placeholder="Included Genres (All)"
                    onChange={(included) => setIncluded(included)}
                    options={tagsList.map((tagCollection) => {
                        return {
                            label: tagCollection.category,
                            options: tagCollection.tags.map((tag) => {
                                return {
                                    value: tag['id'],
                                    label: tag['name'],
                                };
                            }),
                        };
                    })}
                />
                <MultiSelect
                    placeholder="Excluded Genres (None)"
                    onChange={(excluded) => setExcluded(excluded)}
                    options={tagsList.map((tagCollection) => {
                        return {
                            label: tagCollection.category,
                            options: tagCollection.tags.map((tag) => {
                                if (
                                    !included.some(
                                        (genre) => genre['id'] === tag['id']
                                    )
                                ) {
                                    return {
                                        value: tag['id'],
                                        label: tag['name'],
                                    };
                                }
                            }),
                        };
                    })}
                />

                <Button
                    onClick={onGenerate}
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
