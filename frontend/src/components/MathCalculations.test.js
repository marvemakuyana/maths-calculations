import { screen, render } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

import MathCalculations from "./MathCalculations";

describe('Maths Calculations', () => {
    var instance
    var mock;

    beforeEach(function () {
        instance = axios.create()
        mock = new MockAdapter(instance)
    })

    it('should have an input field and a submit button', () => {
        render(<MathCalculations />)
        const inputField = screen.getByLabelText(/numbers/i);
        const submitButton = screen.getByText(/submit/i);

        expect(inputField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    it('should handle post request', () => {
        mock.onPost('/api/math').reply(function (config) {
            return [200, JSON.parse(config.data).numbers]
        })

        return instance.post('/api/math', { numbers: '1,2,3' })
            .then(function (response) {
                expect(response.data).toEqual('1,2,3')
            })
    })
})