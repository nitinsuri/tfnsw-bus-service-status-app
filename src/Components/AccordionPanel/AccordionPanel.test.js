import { render } from '@testing-library/react'
import AccordionPanel from './AccordionPanel'

test('loads and displays the first AccordionPanel', () => {
  const props = {
    service: {
      organisation: 'Westbus',
      date: '27/09/2023',
      busData: [
        {
          busId: '42612',
          routeVariant: '891 2 1',
          deviationFromTimetable: -77
        },
        {
          busId: '29016',
          routeVariant: '400 1 1',
          deviationFromTimetable: 0
        },
        {
          busId: '94811',
          routeVariant: '664 2 1',
          deviationFromTimetable: 164
        },
        {
          busId: '62788',
          routeVariant: 'UNKNOWN',
          deviationFromTimetable: null
        },
        {
          busId: '14221',
          routeVariant: '834 1 1',
          deviationFromTimetable: 423
        }
      ]
    },
    idx: 0,
    expanded: 'panel0',
    handleAccordionChange: jest.fn()
  }
  const accordionPanel = render(<AccordionPanel {...props} />)
  expect(accordionPanel).toMatchSnapshot()
})
