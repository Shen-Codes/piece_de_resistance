import * as React from 'react';
import * as moment from 'moment';
import { StyledCard } from './styles';

interface Props {
   dayOfWeek: string;
   date: moment.Moment;
}

const OneDay: React.FC<Props> = (props: Props): any => {
   return (
      <StyledCard>
         <h4>{props.dayOfWeek}</h4>
         <h4>{props.date}</h4>
      </StyledCard>
   );
};

export default OneDay;
