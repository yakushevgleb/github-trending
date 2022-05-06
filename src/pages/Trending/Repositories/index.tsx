import React from "react";
import { useSearchParams } from "react-router-dom";
import { useRepositories, spokenLanguagesData, GetRepositoriesParams } from "api";
import { Link } from "react-router-dom";
import { BlockHeader, BlockWrapper } from 'ui/Block';
import Toggle from "ui/Toggle";
import { Dropdown, DropdownHeader, DropdownValueType } from "ui/Dropdown";
import List from "./List";

const Repositories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestParams = React.useMemo<GetRepositoriesParams>(() => {
    let newParams: GetRepositoriesParams = {};
    if (searchParams.has('spoken_language_code')) newParams.spokenLang = searchParams.get('spoken_language_code');
    if (searchParams.has('since')) newParams.since = searchParams.get('since');
    return newParams;
  }, [searchParams]);

  const { data } = useRepositories(requestParams);

  const spokenLang = React.useMemo<DropdownValueType>(() => {
    if (searchParams.has('spoken_language_code')) {
      return {
        id: searchParams.get('spoken_language_code') as string,
        value: searchParams.get('spoken_language_code') as string,
      }
    }
    return {
      id: null,
      value: 'Any'
    }
  }, [searchParams])

  const handleLangChange = (value: DropdownValueType) => {
    let newParams = {...searchParams};
    if (value.id == null && newParams.has('spoken_language_code')) {
      newParams.delete('spoken_language_code');
    } else {
      setSearchParams({
        ...searchParams,
        spoken_language_code: value.id?.toString(),
      })
    }
  }

  return (
    <BlockWrapper>
      <BlockHeader>
        <Toggle value={0}>
          <Link to="/trending">Repositories</Link>
          <Link to="/trending/developers">Developers</Link>
        </Toggle>
        <div>
          <Dropdown
            label="Spoken Language"
            value={spokenLang}
            onChange={handleLangChange}
            options={spokenLanguagesData}
            inputProps={{
              placeholder: 'Filter spoken languages'
            }}
            searchable
          >
            <DropdownHeader>
              Select a spoken language
            </DropdownHeader>
          </Dropdown>
        </div>
      </BlockHeader>
      <List data={data} />
    </BlockWrapper>
  )
}

export default Repositories;
