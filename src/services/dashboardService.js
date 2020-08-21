import api from './api';

export class DashboardService {

    async bestSeller(){
        const res = await api.get('dash/bestSeller');
        return res.data[0];
    }

    async bestCustomer(){
        const res = await api.get('dash/bestCustomer');
        return res.data[0];
    }

}