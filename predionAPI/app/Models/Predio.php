<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Predio extends Model
{
    use HasFactory;
    protected $fillable = ['nome', 'endereco', 'tipo', 'numero_pavimentos', 'ano_construcao', 'area_total', 'numero_unidades', 'responsavel', 'informacoes_adicionais','descricao'];
}