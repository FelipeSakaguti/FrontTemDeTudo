import api from './api';

export class SalesService {

    async create(sale){
        const res = await api.post('vendas', sale);
        return res.data;
    }

    async readOne(id){
        const res = await api.get("vendas/"+id);
        return res.data;
    }

    async readAll(nome){
        const res = await api.get('vendas?nome='+nome);
        return res.data;
    }

    async update(sale){
        const res = await api.put('vendas/'+sale.id, sale);
        return res.data;
    }

    async delete(id){
        const res = await api.delete('vendas/'+id);
        return res.data;
    }
}