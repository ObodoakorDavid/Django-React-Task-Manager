# Generated by Django 4.1.3 on 2023-01-02 09:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_chat_task'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='description',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='task',
            name='tags',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='api.tag'),
        ),
        migrations.AlterField(
            model_name='task',
            name='task',
            field=models.CharField(max_length=80),
        ),
    ]