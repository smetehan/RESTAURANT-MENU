# Generated by Django 4.1.7 on 2023-03-05 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0005_alter_masa_image_alter_masa_price_alter_masa_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='masa',
            name='image',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='masa',
            name='price',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='masa',
            name='title',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
