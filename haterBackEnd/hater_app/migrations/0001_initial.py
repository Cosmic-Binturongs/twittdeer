# Generated by Django 4.0.4 on 2022-05-05 14:20

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
            name='Criticism',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('c_body', models.CharField(max_length=140)),
            ],
        ),
        migrations.CreateModel(
            name='User_profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('tag', models.CharField(max_length=50)),
                ('user', models.OneToOneField(default=4, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Hates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('h_body', models.CharField(max_length=120)),
                ('haters', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hater_app.user_profile')),
            ],
        ),
        migrations.CreateModel(
            name='Follower',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hater_being_followed', models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, related_name='followed', to='hater_app.user_profile')),
                ('hater_following', models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, related_name='following', to='hater_app.user_profile')),
            ],
        ),
        migrations.CreateModel(
            name='Dislike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('criticism', models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='hater_app.criticism')),
                ('hate', models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='hater_app.hates')),
                ('haters', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='hater_app.user_profile')),
            ],
        ),
        migrations.AddField(
            model_name='criticism',
            name='haters',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='hater_app.user_profile'),
        ),
        migrations.AddField(
            model_name='criticism',
            name='hates',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='hater_app.hates'),
        ),
    ]