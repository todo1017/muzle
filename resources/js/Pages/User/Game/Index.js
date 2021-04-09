import React from 'react';
import UserLayout from '@/Components/UserLayout';
import FormSelectNative from "@/Components/Form/FormSelectNative";
import Board from "@/Components/Page/User/Board";
import { usePage } from '@inertiajs/inertia-react';
import { Paper } from '@material-ui/core';
import axios from "axios";

const Index = () => {

  const { games } = usePage().props;
  const [data, setData] = React.useState(null);

  const handleGameSelect = event => {
    axios.get(`/games/${event.target.value}`).then(function (response) {
      const { game, backgrounds, categories } = response.data;
      setData({ game, backgrounds, categories });
    });
  };

  return (
    <UserLayout>
      <div className="container max-w-screen-lg mx-auto">
        <div className="py-8 space-y-4">
          <Paper>
            <div className="p-8 space-y-4">
              {games.length > 0 ?
                <div className="space-y-1">
                  <div>Select Game</div>
                  <FormSelectNative
                    options={games}
                    valueKey="id"
                    labelKey="name"
                    onChange={handleGameSelect}
                  />
                </div>
                :
                <div>No Game Exist</div>
              }
              {data &&
                <div>
                  <Board data={data} />
                </div>
              }
            </div>
          </Paper>
        </div>
      </div>
    </UserLayout>
  );
};


export default Index;
