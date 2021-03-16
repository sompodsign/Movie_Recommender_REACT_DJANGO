# Generated by Django 3.1.5 on 2021-01-25 06:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('type', models.CharField(choices=[('Movie', 'Movie'), ('Tv-series', 'Tv Series'), ('Anime', 'Anime')], default='', max_length=15)),
                ('year', models.IntegerField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('rating', models.FloatField(max_length=10)),
                ('review', models.TextField(blank=True, null=True)),
                ('img_url', models.TextField(default='https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png')),
                ('active', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]