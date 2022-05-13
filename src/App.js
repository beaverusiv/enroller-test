import {useEffect, useState} from "react";
import debounce from 'lodash.debounce';

import {fetchSchools} from "./util/fetchSchools";
import {SchoolTable} from "./components/SchoolTable.component";
import {SchoolSearch} from "./components/SchoolSearch.component";

import './App.css';

const RESULT_LIMIT = 10;

const fetchData = debounce(async (query, offset, cb) => {
    const res = await fetchSchools(query, RESULT_LIMIT, offset);
    cb(res);
}, 500);

function App() {
    const [query, setQuery] = useState('');
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [schools, setSchools] = useState([]);

    const changePage = (newOffset) => {
        if (newOffset <= 0) {
            setOffset(0);
            return;
        }

        if (newOffset >= (total - 1)) {
            setOffset(total - 1);
            return;
        }

        setOffset(newOffset);
    }

    useEffect(() => {
        fetchData(query, offset, (res) => {
            setTotal(res.result.total);
            setSchools(res.result.records);
        });
    }, [query, offset]);

  return (
    <div className="App">
      <h1>Enroller Technical Test</h1>
        <SchoolSearch value={query} onChangeSearch={(evt) => setQuery(evt.target.value)} />
      <SchoolTable
          schools={schools}
          total={total}
          offset={offset}
          limit={RESULT_LIMIT}
          onChangePageBack={() => changePage(offset - RESULT_LIMIT)}
          onChangePageForward={() => changePage(offset + RESULT_LIMIT)}
      />
    </div>
  );
}

export default App;
