<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('predios', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 255);
            $table->string('endereco', 255);
            $table->string('tipo', 20);
            $table->integer('numero_pavimentos')->unsigned();
            $table->integer('ano_construcao')->unsigned();
            $table->decimal('area_total', 12, 2);
            $table->integer('numero_unidades')->unsigned();
            $table->text('descricao');
            $table->string('responsavel', 255);
            $table->string('informacoes_adicionais', 255)->nullable();
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('predios');
    }
};
