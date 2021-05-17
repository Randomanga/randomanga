import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import MultiSelect from '../MultiSelect';
import { GenerateButton } from './GenerateButton';
import { safeTags } from '../MultiSelect/options';
import { toast } from 'react-toastify';
import {
  validateExcludeTags,
  validateIncludeTags,
} from '../../utils/validateTags';
import { createRandomList } from '../../adapters/api';
import { useHistory } from 'react-router';
const SimpleForm = props => {
  const [included, setIncluded] = useState([]);
  const [excluded, setExcluded] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async () => {
    setIsLoading(true);
    const includeFilters = validateIncludeTags(included);
    const excludeFilters = validateExcludeTags(excluded);
    try {
      const listID = await createRandomList({
        includeFilters,
        excludeFilters,
      });
      setIsLoading(false);
      history.push(`/random-lists/${listID}`);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const onIncludedChange = changes => {
    setIncluded(changes);
  };
  const onExcludedChange = changes => {
    setExcluded(changes);
  };

  return (
    <VStack alignItems={'center'} spacing={5}>
      <MultiSelect
        as="select"
        name="Included genres"
        options={safeTags}
        placeholder="Select a genre(s) you like"
        noOptionsMessage={() => 'No genres found'}
        onChange={onIncludedChange}
      />
      <MultiSelect
        name="Excluded genres"
        options={safeTags}
        placeholder="Select a genre(s) you dislike"
        noOptionsMessage={() => 'No genres found'}
        onChange={onExcludedChange}
      />
      <GenerateButton isLoading={loading} onClick={onSubmit} />
    </VStack>
  );
};
export default SimpleForm;
