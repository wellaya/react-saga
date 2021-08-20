import React from 'react'
import DisplayBalance from './DisplayBalance'
import {  Grid, Segment } from "semantic-ui-react";

function DisplayBalances() {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance size='small' color='green' title="Income" value="21342.23"/>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance size='small'  color='red' title="Expences" value="21342.23"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances
