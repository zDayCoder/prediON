<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Predio;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Predio::create([
            'nome' => 'Pé na Areia',
            'endereco' => 'Av. Presidente Wilson, 1001',
            'tipo' => 'Residencial',
            'numero_pavimentos' => 45,
            'ano_construcao' => 2020,
            'area_total' => 4500.25,
            'numero_unidades' => 180,
            'descricao' => 'Prédio moderno com vista panorâmica',
            'responsavel' => 'Pedro Barbosa',
            'informacoes_adicionais' => 'Possui academia e piscina'
        ]);

        Predio::create([
            'nome' => 'Edifício Zircontábil',
            'endereco' => 'Rua Ipanema, 456',
            'tipo' => 'Comercial',
            'numero_pavimentos' => 15,
            'ano_construcao' => 2005,
            'area_total' => 1800.50,
            'numero_unidades' => 0,
            'descricao' => 'Edifício comercial com salas para empresas',
            'responsavel' => 'Carlos Rodrigues',
            'informacoes_adicionais' => 'Possui estacionamento para visitantes'
        ]);

        Predio::create([
            'nome' => 'Hotel Bela Vista',
            'endereco' => 'Av. Beira-Mar, 18',
            'tipo' => 'Hotelaria',
            'numero_pavimentos' => 20,
            'ano_construcao' => 2018,
            'area_total' => 8500.75,
            'numero_unidades' => 50,
            'descricao' => 'Hotel com vista para o mar e serviço de primeira classe',
            'responsavel' => 'Maria Oliveira',
            'informacoes_adicionais' => 'Possui restaurante, piscina e spa'
        ]);
    }
}
